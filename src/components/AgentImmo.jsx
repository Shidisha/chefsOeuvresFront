import data from '../data.json'

const AgentImmo = () =>{
    return(
   <div className="relative">
        <div className="fixed">Contacts</div>
            <div>
                <div>
                    <img className=' h-12 w-12 rounded-full' src={data.account[0].profil} />
                    <strong>Andrew Alfred</strong>
                </div>
                <div>
                    <img className=' h-12 w-12 rounded-full' src={data.account[0].profil}/>
                    <strong>Debra Houston</strong>
                </div>
                <div>
                    <img className=' h-12 w-12 rounded-full' src={data.account[0].profil}/>
                    <strong>Debra Houston</strong>
                </div>
                    <div>
                    <img className=' h-12 w-12 rounded-full' src={data.account[0].profil}/>
                    <strong>Debra Houston</strong>
                </div>
        </div>
</div>
    )
}

export default AgentImmo