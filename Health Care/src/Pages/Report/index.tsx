
import PageHeader from '../../layouts/PageHeader'
import ReportGenerator from './ReportGeneration/ReportGenerator'

const index = () => {
  return (
    <div>
      <PageHeader headerName='Reports'/>
      <div className="page-content">
        <ReportGenerator/>
      </div>
    </div>
  )
}

export default index