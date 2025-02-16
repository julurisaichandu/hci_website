const Bibtex = () => {
    return (
      <section className="py-12 bg-gray-100" id="BibTeX">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold mb-6 text-center">BibTeX</h2>
          <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
            <code>
              {`@misc{huq2025cowpilotframeworkautonomoushumanagent,
    title={CowPilot: A Framework for Autonomous and Human-Agent Collaborative Web Navigation}, 
    author={Faria Huq and Zora Zhiruo Wang and Frank F. Xu and Tianyue Ou and Shuyan Zhou and Jeffrey P. Bigham and Graham Neubig},
    year={2025},
    eprint={2501.16609},
    archivePrefix={arXiv},
    primaryClass={cs.AI},
    url={https://arxiv.org/abs/2501.16609}
  }`}
            </code>
          </pre>
        </div>
      </section>
    );
  };
  
  export default Bibtex;
  