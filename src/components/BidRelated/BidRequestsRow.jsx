/* eslint-disable react/prop-types */


const BidRequestsRow = ({ booking ,handleDelete ,handleBookingConfirm}) => {
    const { _id, deadline, email, price,title,status } = booking;

    return (
        <tr className="text-[19px]">
            
           
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
                    status === 'confirm' ?<>
                    <span className="font-bold text-primary">Confirmed</span> 
                    </>:
                       <> <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>
                       <button className="btn btn-error btn-xs"> cancel</button></>}
            </th>
        </tr>
    );
};

export default BidRequestsRow;

