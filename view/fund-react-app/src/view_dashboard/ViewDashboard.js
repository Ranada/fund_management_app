import FundsLeftToInvest from './Components/FundsLeftToInvest'
import FundTable from './Components/FundTable'

export default function ViewDashboard() {

    return (
        <div className="View-dashboard">
            <FundsLeftToInvest />
            <FundTable />
        </div>
    );
}
