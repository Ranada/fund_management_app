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
                </tr>
            </thead>
            <tbody>
                { investments.map((investment) => (
                    <tr>
                        <td>{investment.id}</td>
                        <td>{investment.name}</td>
                        <td>{investment.amount}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
