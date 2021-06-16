import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { Routes } from "../routes";

// pages
import Presentation from "./Presentation";
import Upgrade from "./Upgrade";
import DashboardOverview from "./dashboard/DashboardOverview";
import Transactions from "./Transactions";
import Settings from "./Settings";
import BootstrapTables from "./tables/BootstrapTables";
import Signin from "./Signin";
import Signup from "./Signup";
import ForgotPassword from "./examples/ForgotPassword";
import ResetPassword from "./ResetPassword";
import Lock from "./examples/Lock";
import NotFoundPage from "./examples/NotFound";
import ServerError from "./examples/ServerError";

// documentation pages
import DocsOverview from "./documentation/DocsOverview";
import DocsDownload from "./documentation/DocsDownload";
import DocsQuickStart from "./documentation/DocsQuickStart";
import DocsLicense from "./documentation/DocsLicense";
import DocsFolderStructure from "./documentation/DocsFolderStructure";
import DocsBuild from "./documentation/DocsBuild";
import DocsChangelog from "./documentation/DocsChangelog";

// components
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";

import Accordion from "./components/Accordion";
import Alerts from "./components/Alerts";
import Badges from "./components/Badges";
import Breadcrumbs from "./components/Breadcrumbs";
import Buttons from "./components/Buttons";
import Forms from "./components/Forms";
import Modals from "./components/Modals";
import Navs from "./components/Navs";
import Navbars from "./components/Navbars";
import Pagination from "./components/Pagination";
import Popovers from "./components/Popovers";
import Progress from "./components/Progress";
import Tables from "./components/Tables";
import Tabs from "./components/Tabs";
import Tooltips from "./components/Tooltips";
import Toasts from "./components/Toasts";
// newly added pages
import Administration from './admin/Administration';
import Clients from './client/Clients';
import ClientUsers from './client-users/clientUsers';
import UpdateAdmin from './admin/UpdateAdmin';
import ViewAdmin from './admin/ViewAdmin';
import UpdateClient from './client/UpdateClient';
import ViewClient from './client/ViewClient';
import CreateAdmin from './admin/CreateAdmin';
import CreateClient from './client/CreateClient';
import CreateClientUsers from './client-users/CreateclientUsers';
import UpdateClientUsers from './client-users/UpdateclientUsers';
import ViewClientUsers from './client-users/ViewclientUsers';
import Campaigns from './campaigns/Campaigns';
import CreateCampaigns from './campaigns/CreateCampaigns';
import UpdateCampaigns from './campaigns/UpdateCampaigns';
import ViewCampaign from './campaigns/ViewCampaign';
import Leads from './leads/Leads';
import LeadsStatus from './leads/LeadsStatus';
import LeadNotes from './leadnotes/LeadNotes';
import CreateLeads from './leads/CreateLeads';
import UpdateLeads from './leads/UpdateLeads';
import Profile from './examples/Profile';
import AdminStatus from './admin/AdminStatus';
// end of newly added pages 
const RouteWithLoader = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Route {...rest} render={props => ( <> <Preloader show={loaded ? false : true} /> <Component {...props} /> </> ) } />
  );
};

const RouteWithSidebar = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  //const localStorageIsSettingsVisible = () => {
  //  return localStorage.getItem('settingsVisible') === 'false' ? false : true
  //}

  //const [showSettings, setShowSettings] = useState(localStorageIsSettingsVisible);

  //const toggleSettings = () => {
  //  setShowSettings(!showSettings);
  //  localStorage.setItem('settingsVisible', !showSettings);
 // }

  return (
    <Route {...rest} render={props => (
      <>
        <Preloader show={loaded ? false : true} />
        <Sidebar />

        <main className="content">
          <Navbar />
          <Component {...props} />
          <Footer  />
        </main>
      </>
    )}
    />
  );
};

export default () => (
  <Switch>
    <RouteWithLoader exact path={Routes.Presentation.path} component={Presentation} />
    <RouteWithLoader exact path={Routes.Signin.path} component={Signin} />
    <RouteWithLoader exact path={Routes.Signup.path} component={Signup} />
    <RouteWithLoader exact path={Routes.ForgotPassword.path} component={ForgotPassword} />
    <RouteWithLoader exact path={Routes.ResetPassword.path} component={ResetPassword} />
    <RouteWithLoader exact path={Routes.Lock.path} component={Lock} />
    <RouteWithLoader exact path={Routes.NotFound.path} component={NotFoundPage} />
    <RouteWithLoader exact path={Routes.ServerError.path} component={ServerError} />

    {/* pages */}
    <RouteWithSidebar exact path={Routes.DashboardOverview.path} component={DashboardOverview} />
    <RouteWithSidebar exact path={Routes.Upgrade.path} component={Upgrade} />
    <RouteWithSidebar exact path={Routes.Transactions.path} component={Transactions} />

     {/* Newly added Pages*/}
    <RouteWithSidebar exact path={Routes.Admin.path} component={Administration}/>
    <RouteWithSidebar exact path={Routes.Client.path} component={Clients}/>
    <RouteWithSidebar exact path={Routes.ClientUsers.path} component={ClientUsers}/>
    <RouteWithSidebar exact path={Routes.UpdateAdmin.path } component={UpdateAdmin}/>
    <RouteWithSidebar exact path={Routes.ViewAdmin.path} component={ViewAdmin}/>
    <RouteWithSidebar exact path={Routes.AdminStatus.path} component={AdminStatus}/>
    <RouteWithSidebar exact path={Routes.UpdateClient.path } component={UpdateClient}/>
    <RouteWithSidebar exact path={Routes.ViewClient.path} component={ViewClient}/>
    <RouteWithSidebar exact path={Routes.CreateAdmin.path} component={CreateAdmin}/>
    <RouteWithSidebar exact path={Routes.CreateClient.path} component={CreateClient}/>
    <RouteWithSidebar exact path={Routes.CreateClientUsers.path} component={CreateClientUsers}/>
    <RouteWithSidebar exact path={Routes.UpdateClientUsers.path} component={UpdateClientUsers}/>
    <RouteWithSidebar exact path={Routes.ViewClientUsers.path} component={ViewClientUsers}/>
    <RouteWithSidebar exact path={Routes.Campaigns.path} component={Campaigns}/>
    <RouteWithSidebar exact path={Routes.CreateCampaigns.path} component={CreateCampaigns}/>
    <RouteWithSidebar exact path={Routes.UpdateCampaigns.path} component={UpdateCampaigns}/>
    <RouteWithSidebar exact path={Routes.ViewCampaign.path} component={ViewCampaign}/>

    <RouteWithSidebar exact path={Routes.LeadsNotes.path} component={LeadNotes}/>
    <RouteWithSidebar exact path={Routes.Leads.path} component={Leads}/>
    <RouteWithSidebar exact path={Routes.LeadsStatus.path} component={LeadsStatus}/>
    <RouteWithSidebar exact path={Routes.CreateLeads.path} component={CreateLeads}/>
    <RouteWithSidebar exact path={Routes.UpdateLeads.path} component={UpdateLeads}/>
    <RouteWithSidebar exact path={Routes.Profile.path} component={Profile}/>
    {/* End of Newly added Pages */}

    <RouteWithSidebar exact path={Routes.Settings.path} component={Settings} />
    <RouteWithSidebar exact path={Routes.BootstrapTables.path} component={BootstrapTables} />

    {/* components */}
    <RouteWithSidebar exact path={Routes.Accordions.path} component={Accordion} />
    <RouteWithSidebar exact path={Routes.Alerts.path} component={Alerts} />
    <RouteWithSidebar exact path={Routes.Badges.path} component={Badges} />
    <RouteWithSidebar exact path={Routes.Breadcrumbs.path} component={Breadcrumbs} />
    <RouteWithSidebar exact path={Routes.Buttons.path} component={Buttons} />
    <RouteWithSidebar exact path={Routes.Forms.path} component={Forms} />
    <RouteWithSidebar exact path={Routes.Modals.path} component={Modals} />
    <RouteWithSidebar exact path={Routes.Navs.path} component={Navs} />
    <RouteWithSidebar exact path={Routes.Navbars.path} component={Navbars} />
    <RouteWithSidebar exact path={Routes.Pagination.path} component={Pagination} />
    <RouteWithSidebar exact path={Routes.Popovers.path} component={Popovers} />
    <RouteWithSidebar exact path={Routes.Progress.path} component={Progress} />
    <RouteWithSidebar exact path={Routes.Tables.path} component={Tables} />
    <RouteWithSidebar exact path={Routes.Tabs.path} component={Tabs} />
    <RouteWithSidebar exact path={Routes.Tooltips.path} component={Tooltips} />
    <RouteWithSidebar exact path={Routes.Toasts.path} component={Toasts} />

    {/* documentation */}
    <RouteWithSidebar exact path={Routes.DocsOverview.path} component={DocsOverview} />
    <RouteWithSidebar exact path={Routes.DocsDownload.path} component={DocsDownload} />
    <RouteWithSidebar exact path={Routes.DocsQuickStart.path} component={DocsQuickStart} />
    <RouteWithSidebar exact path={Routes.DocsLicense.path} component={DocsLicense} />
    <RouteWithSidebar exact path={Routes.DocsFolderStructure.path} component={DocsFolderStructure} />
    <RouteWithSidebar exact path={Routes.DocsBuild.path} component={DocsBuild} />
    <RouteWithSidebar exact path={Routes.DocsChangelog.path} component={DocsChangelog} />

    <Redirect to={Routes.NotFound.path} />
  </Switch>
);
