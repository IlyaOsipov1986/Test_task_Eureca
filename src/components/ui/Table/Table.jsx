const Table = (props) => {

    const {
        tableData
    } = props;

    return (
        <table className="table">
            <thead>
            <tr className="table__row">
                <th className="table__heading">Номер подъезда</th>
                <th className="table__heading">Номер квартиры</th>
            </tr>
            </thead>
            <tbody>
            {
                tableData && tableData.length > 0 ?
                    tableData.map((item, i) => {
                        return (
                            <tr className="table__row" key={i}>
                                <td className="table__cell">{item.entrance}</td>
                                <td className="table__cell">{item.flats.join(', ')}</td>
                            </tr>
                        )
                    })
                    :
                    <tr className="table__row">
                      <td className="table__cell" colSpan={2}>Данные не найдены!</td>
                    </tr>
            }
            </tbody>
        </table>
    )
}
export default Table;