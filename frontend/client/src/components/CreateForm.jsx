// import { useState } from "react"
// const CreateForm = () => {
//    const[data,setData] =useState({
//     title:'',
//     desc:''
//    });
// const [title, setTitle] = useState('');
// const [desc, setDesc] = useState('');
// //    const {title,desc} = data;
//    const handleChange = (e) =>{
//     setTitle(e.target.value);

//    }
//    const handleDesc = (e) =>{
//     console.log(e.target.value);
//     setDesc(e.target.value)
//     // let updatedValue =setData(e.target.value);
//     // console.log(updatedValue)
//    }

//   return (
//     <div className="create-form">
//         <div>
//             <p>{title}</p>
//             <p>{desc}</p>
//         </div>
//             <form>
//                 <div className="form-group">
//                     <input type="text" name="title" value={title} onChange={handleChange} />
//                 </div>
//                 <div className="form-group">
//                     <textarea cols={20} rows={10} name="desc" value={desc} onChange={handleDesc}></textarea>
//                 </div>
//             </form>
//     </div>
//   )
// }

// export default CreateForm