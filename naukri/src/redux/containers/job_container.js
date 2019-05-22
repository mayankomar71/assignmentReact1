import  {connect} from  "react-redux";
import Home from '../../components/homecomponent'
import {getjob_user} from '../actions/job_action.js';
import {apply_job, get_applyjob, get_applyjob_company, update_apply, get_applyjob_user} from '../actions/apply_action';

const mapStateToProps = (state) =>{
    return {
        alljobs:state.jobs.data,
        apply:state.apply_data.data,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        dispatch,
        getjob_user: (companyname) => dispatch(getjob_user(companyname)),
        apply_job:(data)=>dispatch(apply_job(data)),
        get_applyjob:(userid)=>dispatch(get_applyjob(userid)),
        get_applyjob_company:(company)=>dispatch(get_applyjob_company(company)),
        update_apply:(data, company)=>dispatch(update_apply(data, company)),
        get_applyjob_user:(userid)=>dispatch(get_applyjob_user(userid))

    }
}
export const home= connect(mapStateToProps, mapDispatchToProps)(Home);