import React from 'react';
import {DonationProvider} from './donation';
import {ProjectProvider} from './project';

const AppProvider = ({children}: any) => (
  <ProjectProvider>
    <DonationProvider>{children}</DonationProvider>
  </ProjectProvider>
);

export default AppProvider;
