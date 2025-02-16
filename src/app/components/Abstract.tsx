const Abstract = ({abstract}:{abstract:string}) => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto max-w-3xl text-center">
        {/* Title */}
        <h2 className="text-3xl font-semibold mb-6">Abstract</h2>

        {/* Content */}
        <p className="text-lg leading-relaxed text-left">
         {abstract}
        </p>
      </div>
    </section>
  );
};

export default Abstract;
