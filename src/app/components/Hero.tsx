import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faDatabase, faFileArchive } from "@fortawesome/free-solid-svg-icons";

interface HeroProps {
  title: string;
  authors: { name: string; link: string; university: string }[];
}

const Hero = ({ title, authors }: HeroProps) => {


  return (
    <section className="bg-white py-12">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Title */}
        <h1 className="text-4xl font-bold flex items-center justify-center">
          {title}
        </h1>

        {/* Authors */}
        <div className="mt-4 text-lg">
          <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            {authors.map((author, index) => (
              <div key={index} className="mb-2">
                {/* Author Name */}
                <a
                  href={author.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {author.name}
                </a>
                {/* Author's University */}
                <p className="text-gray-600 text-sm">{author.university}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-gray-700">Under Review in NAACL 2025 Demo Track</p>
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
