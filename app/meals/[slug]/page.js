
const SlugPage = ({ params }) => {
    return (
      <main>
        <h1 style={{ color: 'white', textAlign: 'center' }}>
          Slug
        </h1>
        <h2 style={{ color: 'white', textAlign: 'center' }}>
          {params.slug}
        </h2>
      </main>
    )
  }
  
  export default SlugPage