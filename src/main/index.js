import ProcessHistorySearch from '../views/oa/comp/processHistorySearch'
import ProcessHistoryView from '../views/oa/comp/processHistoryView'
import ProcessDefinitionView from '../views/oa/comp/processDefinitionView'
import TaskView from '../views/oa/comp/taskView'
import TaskComplete from '../views/oa/comp/taskComplete'
import TaskSearch from '../views/oa/task/taskSearch'
import Task from '../views/oa/task/task'
import CandidateAdd from '../views/oa/candidate/candidateAdd'
import CandidateSearch from '../views/oa/candidate/candidateSearch'
import CandidateView from '../views/oa/candidate/candidateView'
import Candidate from '../views/oa/candidate/candidate'
import CarApplyAdd from '../views/oa/carapply/carApplyAdd'
import CarApplySearch from '../views/oa/carapply/carApplySearch'
import CarApplyView from '../views/oa/carapply/carApplyView'
import CarApply from '../views/oa/carapply/carapply'
import CategoryView from '../views/oa/category/categoryView'
import CategoryAdd from '../views/oa/category/categoryAdd'
import CategorySearch from '../views/oa/category/categorySearch'
import Category from '../views/oa/category/category'
import RedheadApplyView from '../views/oa/redheadapply/redheadApplyView'
import RedheadApplyAdd from '../views/oa/redheadapply/redheadApplyAdd'
import RedheadApplySearch from '../views/oa/redheadapply/redheadApplySearch'
import RedheadApply from '../views/oa/redheadapply/redheadapply'
import DocumentView from '../views/oa/document/documentView'
import DocumentSearch from '../views/oa/document/documentSearch'
import DocumentPublish from '../views/oa/document/documentPublish'
import Document from '../views/oa/document/document'
import InterviewView from '../views/oa/interview/interviewView'
import InterviewAdd from '../views/oa/interview/interviewAdd'
import InterviewSearch from '../views/oa/interview/interviewSearch'
import Interview from '../views/oa/interview/interview'
import LectureView from '../views/oa/lecture/lectureView'
import LectureAdd from '../views/oa/lecture/lectureAdd'
import LectureSearch from '../views/oa/lecture/lectureSearch'
import Lecture from '../views/oa/lecture/lecture'
import EmployApplyView from '../views/oa/employapply/employApplyView'
import EmployApplySearch from '../views/oa/employapply/employApplySearch'
import EmployApply from '../views/oa/employapply/employapply'
import EvectionApplyView from '../views/oa/evectionapply/evectionApplyView'
import EvectionApplyAdd from '../views/oa/evectionapply/evectionApplyAdd'
import EvectionApplySearch from '../views/oa/evectionapply/evectionApplySearch'
import EvectionApply from '../views/oa/evectionapply/evectionapply'
import MainWork from '../views/oa/mainwork/mainwork'
import MeetingApplyView from '../views/oa/meetingapply/meetingApplyView'
import MeetingApplyAdd from '../views/oa/meetingapply/meetingApplyAdd'
import MeetingApplySearch from '../views/oa/meetingapply/meetingApplySearch'
import MeetingApply from '../views/oa/meetingapply/meetingapply'
import MeetingroomView from '../views/oa/meetingroom/meetingroomView'
import MeetingroomAdd from '../views/oa/meetingroom/meetingroomAdd'
import MeetingroomSearch from '../views/oa/meetingroom/meetingroomSearch'
import Meetingroom from '../views/oa/meetingroom/meetingroom'
import MeetingroomApplyView from '../views/oa/meetingroomapply/meetingroomApplyView'
import MeetingroomApplyAdd from '../views/oa/meetingroomapply/meetingroomApplyAdd'
import MeetingroomApplyEdit from '../views/oa/meetingroomapply/meetingroomApplyEdit'
import MeetingroomApplySearch from '../views/oa/meetingroomapply/meetingroomApplySearch'
import MeetingroomApply from '../views/oa/meetingroomapply/meetingroomapply'
import MyInvolvedProcessHistory from '../views/oa/myinvolvedprocesshistory/myinvolvedprocesshistory'
import MyProcessHistory from '../views/oa/myprocesshistory/myprocesshistory'
import OaDict from '../views/oa/oadict/oadict'
import ProcessDefinitionSearch from '../views/oa/processdefinition/processDefinitionSearch'
import Processdefinition from '../views/oa/processdefinition/processdefinition'
import ProcessHistory from '../views/oa/processhistory/processhistory'
import PurchaseApply from '../views/oa/purchaseapply/purchaseapply'
import RecruitApplyView from '../views/oa/recruitapply/recruitApplyView'
import RecruitApplyAdd from '../views/oa/recruitapply/recruitApplyAdd'
import RecruitApplySearch from '../views/oa/recruitapply/recruitApplySearch'
import RecruitApply from '../views/oa/recruitapply/recruitapply'
import ReimbursementApplyDetail from '../views/oa/reimbursementapply/detail'
import ReimbursementApplyDetailAdd from '../views/oa/reimbursementapply/detailAdd'
import ReimbursementApplyView from '../views/oa/reimbursementapply/reimbursementApplyView'
import ReimbursementApplyAdd from '../views/oa/reimbursementapply/reimbursementApplyAdd'
import ReimbursementApplySearch from '../views/oa/reimbursementapply/reimbursementApplySearch'
import ReimbursementApply from '../views/oa/reimbursementapply/reimbursementapply'
import SealApplyView from '../views/oa/sealapply/sealApplyView'
import SealApplyAdd from '../views/oa/sealapply/sealApplyAdd'
import SealApplySearch from '../views/oa/sealapply/sealApplySearch'
import SealApply from '../views/oa/sealapply/sealapply'
import StatisticsSearch from '../views/oa/statistics/statisticsSearch'
import Statistics from '../views/oa/statistics/statistics'
import TeachingCarApplyView from '../views/oa/teachingcarapply/teachingCarApplyView'
import TeachingCarApplyAdd from '../views/oa/teachingcarapply/teachingCarApplyAdd'
import TeachingCarApplySearch from '../views/oa/teachingcarapply/teachingCarApplySearch'
import TeachingCarApply from '../views/oa/teachingcarapply/teachingcarapply'
import TempApplyView from '../views/oa/tempapply/tempApplyView'
import TempApplyAdd from '../views/oa/tempapply/tempApplyAdd'
import TempApplySearch from '../views/oa/tempapply/tempApplySearch'
import TempApply from '../views/oa/tempapply/tempapply'

const components = [
  ProcessHistorySearch, ProcessHistoryView, ProcessDefinitionView,
  TaskView, TaskComplete, TaskSearch, Task,
  CandidateAdd, CandidateSearch, CandidateView, Candidate,
  CarApplyAdd, CarApplySearch, CarApplyView, CarApply,
  CategoryView, CategoryAdd, CategorySearch, Category,
  DocumentView, DocumentSearch, DocumentPublish, Document,
  RedheadApplyView, RedheadApplyAdd, RedheadApplySearch, RedheadApply,
  EmployApplyView, EmployApplySearch, EmployApply,
  EvectionApplyView, EvectionApplyAdd, EvectionApplySearch, EvectionApply,
  InterviewView, InterviewAdd, InterviewSearch, Interview,
  LectureView, LectureAdd, LectureSearch, Lecture,
  MainWork,
  MeetingApplyView, MeetingApplyAdd, MeetingApplySearch, MeetingApply,
  MeetingroomView, MeetingroomAdd, MeetingroomSearch, Meetingroom,
  MeetingroomApplyView, MeetingroomApplyAdd, MeetingroomApplyEdit, MeetingroomApplySearch, MeetingroomApply,
  MyInvolvedProcessHistory, MyProcessHistory, OaDict,
  ProcessDefinitionSearch, Processdefinition, ProcessHistory,
  PurchaseApply,
  RecruitApplyView, RecruitApplyAdd, RecruitApplySearch, RecruitApply,
  ReimbursementApplyDetail, ReimbursementApplyDetailAdd, ReimbursementApplyView, ReimbursementApplyAdd, ReimbursementApplySearch, ReimbursementApply,
  SealApplyView, SealApplyAdd, SealApplySearch, SealApply,
  StatisticsSearch, Statistics,
  TeachingCarApplyView, TeachingCarApplyAdd, TeachingCarApplySearch, TeachingCarApply,
  TempApplyView, TempApplyAdd, TempApplySearch, TempApply
]
const oa = {
  install: function (Vue, opts) {
    opts = opts | {}
    // let resolveArr = {}
    // let keyArr = []
    components.map(function(component) {
      Vue.component(component.name, component)
    })
    // 异步加载方式
    /**
    resolveArr['oa#candidate'] = () => import('../views/oa/candidate/candidate.vue')
    keyArr.push('oa#candidate')
    resolveArr['oa#carapply'] = () => import('../views/oa/carapply/carapply.vue')
    keyArr.push('oa#carapply')
    resolveArr['oa#task'] = () => import('../views/oa/task/task.vue')
    keyArr.push('oa#task')
    resolveArr['oa#category'] = () => import('../views/oa/category/category.vue')
    keyArr.push('oa#category')
    resolveArr['oa#document'] = () => import('../views/oa/document/document.vue')
    keyArr.push('oa#document')
    resolveArr['oa#employapply'] = () => import('../views/oa/employapply/employapply.vue')
    keyArr.push('oa#employapply')
    resolveArr['oa#evectionapply'] = () => import('../views/oa/evectionapply/evectionapply.vue')
    keyArr.push('oa#evectionapply')
    resolveArr['oa#interview'] = () => import('../views/oa/interview/interview.vue')
    keyArr.push('oa#interview')
    resolveArr['oa#lecture'] = () => import('../views/oa/lecture/lecture.vue')
    keyArr.push('oa#lecture')
    resolveArr['oa#mainwork'] = () => import('../views/oa/mainwork/mainwork.vue')
    keyArr.push('oa#mainwork')
    resolveArr['oa#meetingapply'] = () => import('../views/oa/meetingapply/meetingapply.vue')
    keyArr.push('oa#meetingapply')
    resolveArr['oa#meetingroom'] = () => import('../views/oa/meetingroom/meetingroom.vue')
    keyArr.push('oa#meetingroom')
    resolveArr['oa#meetingroomapply'] = () => import('../views/oa/meetingroomapply/meetingroomapply.vue')
    keyArr.push('oa#meetingroomapply')
    resolveArr['oa#myinvolvedprocesshistory'] = () => import('../views/oa/myinvolvedprocesshistory/myinvolvedprocesshistory.vue')
    keyArr.push('oa#myinvolvedprocesshistory')
    resolveArr['oa#myprocesshistory'] = () => import('../views/oa/myprocesshistory/myprocesshistory.vue')
    keyArr.push('oa#myprocesshistory')
    resolveArr['oa#oadict'] = () => import('../views/oa/oadict/oadict.vue')
    keyArr.push('oa#oadict')
    resolveArr['oa#processdefinition'] = () => import('../views/oa/processdefinition/processdefinition.vue')
    keyArr.push('oa#processdefinition')
    resolveArr['oa#processhistory'] = () => import('../views/oa/processhistory/processhistory.vue')
    keyArr.push('oa#processhistory')
    resolveArr['oa#purchaseapply'] = () => import('../views/oa/purchaseapply/purchaseapply.vue')
    keyArr.push('oa#purchaseapply')
    resolveArr['oa#recruitapply'] = () => import('../views/oa/recruitapply/recruitapply.vue')
    keyArr.push('oa#recruitapply')
    resolveArr['oa#redheadapply'] = () => import('../views/oa/redheadapply/redheadapply.vue')
    keyArr.push('oa#redheadapply')
    resolveArr['oa#reimbursementapply'] = () => import('../views/oa/reimbursementapply/reimbursementapply.vue')
    keyArr.push('oa#reimbursementapply')
    resolveArr['oa#sealapply'] = () => import('../views/oa/sealapply/sealapply.vue')
    keyArr.push('oa#sealapply')
    resolveArr['oa#statistics'] = () => import('../views/oa/statistics/statistics.vue')
    keyArr.push('oa#statistics')
    resolveArr['oa#teachingcarapply'] = () => import('../views/oa/teachingcarapply/teachingcarapply.vue')
    keyArr.push('oa#teachingcarapply')
    resolveArr['oa#tempapply'] = () => import('../views/oa/tempapply/tempapply.vue')
    keyArr.push('oa#tempapply')
    let moduleInfo = {
      moduleName: 'oa',
      moduleResolveArr: resolveArr,
      moduleKeyArr: keyArr
    }
    Vue.prototype.$module = moduleInfo
     **/
  }
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(oa)
}
export default oa
