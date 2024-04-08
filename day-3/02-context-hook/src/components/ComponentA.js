import ComponentB from './ComponentB'

function ComponentA({ user }) {
    return (
        <div>
            <ComponentB user={user} />
        </div>
    )
}

export default ComponentA