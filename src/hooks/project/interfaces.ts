export interface ProjectData {
  _id: string;
  name: string;
  description: string;
  imageUrl: string;
  status: boolean;
  slug: string;
}

export interface ProjectStatusData {
  status: boolean;
}

export interface ProjectContextData {
  data: ProjectData[];
  project: ProjectData;
  settingProject(_id: string): void;
  getProjects(): Promise<void>;
  loading: boolean;
}
