import React from 'react'
import './styles.css'

interface TableProps {
    objList: object[]
}

const Table: React.FC<TableProps> = ({
    objList
}) => {
    const isNotEmpty = objList.length > 0

    if (isNotEmpty) {
        return (
            <table className='table'>
                <thead>
                    <tr>
                        {Object.keys(objList[0]).map((key, index) => (
                            <th key={index}>{key}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                {objList.map((obj, index) => (
                    <tr key={index}>
                        {Object.values(obj).map((value, index) => (
                            <td key={index}>{value}</td>
                        ))}    
                    </tr>
                ))}
                </tbody>
            </table>
        )
    } else {
        return (
            <div className='empty-table'>
                Nenhum dado foi encontrado
            </div>
        )
    }
}

export default Table