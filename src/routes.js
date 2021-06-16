
export const Routes = {
    // pages
    Presentation: { path: "/" },
    DashboardOverview: { path: "/dashboard/overview" },
    Transactions: { path: "/transactions" },
    //newly added pages
    Admin: { path: "/admin/Administration" },
    Client: { path: "/client/Clients"},

    UpdateAdmin: { path: "/admin/UpdateAdmin/:id"},
    ViewAdmin : { path: "/admin/ViewAdmin/:id"},
    AdminStatus: { path : "/admin/AdminStatus/:id"},
    UpdateClient : { path: "/client/UpdateClient/:id"},
    ViewClient: { path: "/client/ViewClient/:id"},
    ClientUsers: { path: "/client-users/clientUsers/:id"},
    ViewClientUsers: { path: "/client-users/ViewclientUsers/:id"},
    ViewCampaign : { path: "/campaigns/ViewCampaign/:id"},


    CreateAdmin: { path: "/admin/CreateAdmin"},
    CreateClient: { path: "/client/CreateClient"},
    CreateClientUsers: { path: "/client-users/CreateclientUsers"},
    UpdateClientUsers: { path: "/client-users/UpdateclientUsers"},
    
    Campaigns: { path: "/campaigns/Campaigns" },
    CreateCampaigns: { path : "/campaigns/CreateCampaigns" },
    UpdateCampaigns: { path : "/campaigns/UpdateCampaigns/:id"},
    
    Leads: {path : "/leads/Leads/:id"},
    LeadsStatus: { path: "/leads/LeadsStatus"},
    CreateLeads: { path: "/leads/CreateLeads"},
    UpdateLeads: { path: "/leads/UpdateLeads"},

    LeadsNotes : { path: "/leadnotes/LeadNotes/:id"},

    Profile: { path: "/examples/profile"},

    Settings: { path: "/settings" },
    Upgrade: { path: "/upgrade" },
    BootstrapTables: { path: "/tables/bootstrap-tables" },
    Billing: { path: "/examples/billing" },
    Invoice: { path: "/examples/invoice" },
    Signin: { path: "/sign-in" },
    Signup: { path: "/sign-up" },
    ForgotPassword: { path: "/examples/forgot-password" },
    ResetPassword: { path: "/reset-password" },
    Lock: { path: "/examples/lock" },
    NotFound: { path: "/examples/404" },
    ServerError: { path: "/examples/500" },

    // docs
    DocsOverview: { path: "/documentation/overview" },
    DocsDownload: { path: "/documentation/download" },
    DocsQuickStart: { path: "/documentation/quick-start" },
    DocsLicense: { path: "/documentation/license" },
    DocsFolderStructure: { path: "/documentation/folder-structure" },
    DocsBuild: { path: "/documentation/build-tools" },
    DocsChangelog: { path: "/documentation/changelog" },

    // components
    Accordions: { path: "/components/accordions" },
    Alerts: { path: "/components/alerts" },
    Badges: { path: "/components/badges" },
    Widgets: { path: "/widgets" },
    Breadcrumbs: { path: "/components/breadcrumbs" },
    Buttons: { path: "/components/buttons" },
    Forms: { path: "/components/forms" },
    Modals: { path: "/components/modals" },
    Navs: { path: "/components/navs" },
    Navbars: { path: "/components/navbars" },
    Pagination: { path: "/components/pagination" },
    Popovers: { path: "/components/popovers" },
    Progress: { path: "/components/progress" },
    Tables: { path: "/components/tables" },
    Tabs: { path: "/components/tabs" },
    Tooltips: { path: "/components/tooltips" },
    Toasts: { path: "/components/toasts" },
    WidgetsComponent: { path: "/components/widgets" }
};