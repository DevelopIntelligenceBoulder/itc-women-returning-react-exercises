import ComponentC from './ComponentC'

function ComponentB({ user }) {
    return (
        <div>
            <ComponentC user={user} />
        </div>
    )
}

export default ComponentB