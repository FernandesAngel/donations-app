import React, {createContext, useCallback, useContext, useState} from 'react';
import {api} from '../../services/api';
import {ProjectContextData, ProjectData} from './interfaces';

const ProjectContext = createContext<ProjectContextData>(
  {} as ProjectContextData,
);

export const ProjectProvider: React.FC = ({children}) => {
  const [data, setData] = useState<ProjectData[]>([]);
  const [project, setProject] = useState<ProjectData>({} as ProjectData);
  const [loading, setLoading] = useState(false);
  const getProjects = useCallback(async () => {
    try {
      setLoading(true);
      const responseProject = await api.get<ProjectData[]>('projects-public');
      setData(responseProject.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }, []);

  const settingProject = useCallback(
    (_id: string) => {
      const projectFiltered = data.filter(proj => proj._id === _id);
      if (projectFiltered.length > 0) {
        setProject(projectFiltered[0]);
      }
    },
    [data],
  );

  return (
    <ProjectContext.Provider
      value={{
        data,
        getProjects,
        loading,
        project,
        settingProject,
      }}>
      {children}
    </ProjectContext.Provider>
  );
};

export function useProject(): ProjectContextData {
  const context = useContext(ProjectContext);

  return context;
}
