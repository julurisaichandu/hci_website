const Bibtex = ({bibtex}:{bibtex:string}) => {
    return (
      <section className="py-12 bg-gray-100" id="BibTeX">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold mb-6 text-center">BibTeX</h2>
          <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
            <code>
              {bibtex}
            </code>
          </pre>
        </div>
      </section>
    );
  };
  
  export default Bibtex;
  