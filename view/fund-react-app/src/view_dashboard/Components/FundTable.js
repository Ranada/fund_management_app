import { useState } from 'react';
import MockData from '../../mock-data.json';

export default function FundTable() {
    const [investments] = useState(MockData);

    return (
        <table className="ViewDashboard-table">
            <thead className="ViewDashboard-table-headers">
                <tr>
                    <th>ID</th>
                    <th>Investment name</th>
                    <th>Amount invested</th>
                    <th>Type</th>
                    <th>Ticker</th>
                    <th>Company</th>
                </tr>
            </thead>
            <tbody>
                { investments.map((investment) => (
                    <tr>
                        <td>{investment.id}</td>
                        <td>{investment.name}</td>
                        <td>{investment.amount}</td>
                        <td>{investment.type}</td>
                        <td>{investment.ticker}</td>
                        <td>{investment.company}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
