const ContactUnorderedList = ({contactList, title}) => {
  return (
    <div id={title}>
    <p>{title}</p>
    <ul>
      {
        contactList.map((currentContact) => {
         
          return <li key={currentContact.id}>{
            title === 'Name' ? currentContact.name :
            title === 'email' ? currentContact.email :
             currentContact.phone 
            } </li>
        })
      }
    </ul>
    </div>
  )
}
export default ContactUnorderedList;