import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faDatabase, faFileArchive } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  const authors = [
    { name: "Faria Huq", link: "https://oaishi.github.io/" },
    { name: "Zora Zhiruo Wang", link: "https://zorazrw.github.io/" },
    { name: "Frank F. Xu", link: "https://frankxfz.me/" },
    { name: "Tianyue Ou", link: "#" }, // Replace "#" with the actual link if available
    { name: "Shuyan Zhou", link: "https://shuyanzhou.github.io/" },
    { name: "Jeffrey P. Bigham", link: "https://www.cs.cmu.edu/~jbigham/" },
    { name: "Graham Neubig", link: "https://www.phontron.com/" },
  ];
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Title */}
        <h1 className="text-4xl font-bold flex items-center justify-center">
          {/* Logo */}
          {/* <Image
            src="/static/images/cowpilot.png"
            alt="CowPilot Logo"
            width={40}
            height={40}
            className="mr-2"
          /> */}
          CowPilot: A Framework for Autonomous and Human-Agent Collaborative Web Navigation
        </h1>

        {/* Authors */}
        <div className="mt-4 text-lg">
        <p>
            {authors.map((author, index) => (
              <span key={index}>
                <a
                  href={author.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {author.name}
                </a>
                {index < authors.length - 1 && ", "}
              </span>
            ))}
          </p>
          <p className="mt-2">Carnegie Mellon University | Under Review in NAACL 2025 Demo Track</p>
          <small><sup>*</sup> Indicates Equal Supervision</small>
        </div>

{/* Links */}
<div className="mt-6 flex justify-center space-x-4">
          {/* ArXiv Link */}
          <a
            href="https://arxiv.org/abs/2501.16609"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition duration-200"
          >
            <FontAwesomeIcon icon={faFilePdf} className="h-5 w-5" />
            <span>ArXiv</span>
          </a>

          {/* User Log Data */}
          <a
            href="https://drive.google.com/drive/folders/19GOiC-KmdjTwoYOXl1fSJRDejk97dv65?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition duration-200"
          >
            <FontAwesomeIcon icon={faDatabase} className="h-5 w-5" />
            <span>User Log Data</span>
          </a>

          {/* Chrome Extension */}
          <a
            href="/static/files/cowpilot_final_build.zip"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition duration-200"
          >
            <FontAwesomeIcon icon={faFileArchive} className="h-5 w-5" />
            <span>Chrome Extension</span>
          </a>
        </div>
      </div>
    </section>
  );
};



export default Hero;
