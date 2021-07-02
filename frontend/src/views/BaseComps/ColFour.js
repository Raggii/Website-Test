import React from 'react'

export default function ColFour({firstRow,secondRow,thirdRow, forthRow}) {
    return (
        <tr>
            <th scope="col-2 fs-2">{firstRow}</th>
            <td>{secondRow}</td>
            <td>{thirdRow}</td>
            <td>{forthRow}</td>
        </tr>
)
}
