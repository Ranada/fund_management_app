export default function FundTable() {
    return (
        <table className="App-table">
            <thead className="App-table-headers">
                <tr>
                <th>Investment name</th>
                <th>Amount invested</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Fund 1</td>
                <td>$1000</td>
                </tr>
                <tr>
                <td>Fund 2</td>
                <td>$2000</td>
                </tr>
                <tr>
                <td>Fund 3</td>
                <td>$10000</td>
                </tr>
            </tbody>
        </table>
    );
}
