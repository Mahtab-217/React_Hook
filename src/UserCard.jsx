export default function UserCard({user}){
    return (
        <div className="border bg-white p-5 rounded-2xl">
            <h1 className="text-4xl font-bold">{user.name}</h1>
            <div className="flex justify-between ">
                <p className="text-sm text-gray-500">{user.email}</p>
                <p className="text-sm text-gray-500">{user.phone}</p>
            </div>
        </div>
    )
}