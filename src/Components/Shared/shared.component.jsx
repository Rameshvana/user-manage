import { MdMode,MdDelete,MdPictureAsPdf } from "react-icons/md";

import './shared.component.css';



const SharedComponent = (props) => {

//create function for edit

    return (
        <div>
            <h3></h3>
            <table className="table table-bordered table-hover">
                <thead className="table-dangerj">
                    <tr>
                        {
                            props.headers.map((header) => <th>{header}</th>)

                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        props.body.map((row) => <tr>
                            {
                                Object.values(row).map((row) => <td className='tf'>{row}</td>)
                            }
                            <td>
                                {/* <button className='btn btn-success'>Edit</button> &nbsp;
                                <button className='btn btn-danger'>Delete</button> */}
                              <a href='#' onClick={() => {props.UpdatePropertyGrid(row)}}><MdMode className='bomma'/> </a>
                              <a href='#' onClick={() => {props.deleteItemGrid(row)}}><MdDelete className='bomma1'/> </a>
                              <a href='#' onClick={() => {}}><MdPictureAsPdf className='bomma2'/></a>
                               
                            </td>
                        </tr>
                        )
                    }
                </tbody>
                <tfoot></tfoot>
            </table>
        </div>
    )
   
}

export default SharedComponent;





































