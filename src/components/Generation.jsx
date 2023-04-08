const Generation = () => {
  const generate = event => {
    const result = Math.floor(Math.random() * 367);
    return result;
  };

  const result = generate();
  return (
    <>
      {/* <button onClick={event => generate()}>Generate question</button> */}
      <p>{result}</p>
    </>
  );
};

export default Generation;
