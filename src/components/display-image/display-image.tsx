
import tarshIcon from '../../assets/icon-trash-bin.svg';
import editIcon from '../../assets/icon-edit.svg';


export default function DisplayImage({ src} : {src:string}) {
  return (
    <div className="flex flex-row gap-2 mt-[1.7rem]">
        <img src={src} className="w-16 h-16"/>
        <div className="flex flex-col gap-2">
            <img className='w-6 h-6' src={tarshIcon}/>
            <img className='w-6 h-6' src={editIcon}/>
        </div>
    </div>
  )
}
