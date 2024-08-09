
import PageHeader from '../../../layouts/PageHeader'
import { DashboardTabs } from '../../../utilities/constants'

const index = () => {
  return (
    <div>
        <PageHeader navItems={DashboardTabs} />  
        hello page 3
    </div>
  )
}

export default index