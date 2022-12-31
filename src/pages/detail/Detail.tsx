import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { RootState } from '../../redux/configStore'
import { getDetailApi } from '../../redux/elearningReducer/elearningReducer';

type Props = {}

export default function Detail({}: Props) {
  const {arrDetail}=useSelector((state:RootState)=>state.elearningReducer)
  const dispatch=useDispatch()
  console.log(arrDetail?.biDanh)
  const{id}=useParams(); 

  useEffect(() => {
    const action = getDetailApi(id);
    dispatch(action);
  }, [id]);
  return (
    <div className='detail'>
      <div className='container'>
        <div className='detail-header'>
        {/* <h3>{arrDetail?.tenKhoaHoc}h</h3> */}
          <h3 style={{fontSize:'60px'}}>{arrDetail?.tenKhoaHoc}</h3>
         <img src={arrDetail?.hinhAnh} alt="..."  />
        </div>
        <div className='detail-body'>
       <div className='left '>
       <h1>Chi tiết khóa học</h1>
          <p>{arrDetail.moTa}</p>
       </div>
       <div className='right'>
        <table className='table' style={{border:'2px solid'}}>
          <thead className='title-table'>
            <th>Giáo viên</th>
            <th>Lượt xem</th>
            <th>Số lượng học viên</th>
            <th>Mã nhóm</th>
          </thead>
          <tbody >
            <tr className='body-table'>
              <td>{arrDetail.nguoiTao.hoTen}</td>
              <td>{arrDetail.luotXem}</td>
              <td>{arrDetail.soLuongHocVien}</td>
              <td>{arrDetail.maNhom}</td>
            </tr>
          </tbody>
        </table>
        <button className='btn btn-success'>Ghi danh</button>
       </div>
        </div>
      </div>
    </div>
  )
}