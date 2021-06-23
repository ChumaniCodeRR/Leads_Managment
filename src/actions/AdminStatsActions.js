import AdminStatsService from '../services/AdminStatsService';


export const GetClientNumber = () => () => {
    return AdminStatsService.getclientstats()
}

export const GetUserNumber = () => () => {
    return AdminStatsService.getusersstats()
} 

export const GetLeadsNumber = () => () => {
    return AdminStatsService.getleadsstats()
} 