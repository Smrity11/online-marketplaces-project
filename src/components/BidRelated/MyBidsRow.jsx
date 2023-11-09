/* eslint-disable react/prop-types */


const MyBidsRow = ({ booking ,handleDelete }) => {
    const { _id, deadline, email, price,title ,status } = booking;

    return (
        <tr className="text-[19px]">
            <th>
               {
                status === "confirm" ? " " : <button  className="btn btn-sm btn-circle" onClick={() =>handleDelete(_id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
               }
            </th>
           
            <td>
                {email}
            </td>
            <td>
                {title}
            </td>
            <td>${price}</td>
            <td>{deadline}</td>
            <th>
                {
                    status === "confirm" ? (
          <span className="font-bold text-primary">Confirmed</span>
        ) : status === "cancel" ? (
          <span className="font-bold text-error">Canceled</span>
        )  :
                        <button  className="btn btn-ghost btn-xs">Pending....</button>}
            </th>
        </tr>
    );
};

export default MyBidsRow;

