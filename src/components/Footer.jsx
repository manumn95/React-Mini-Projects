const Footer = (Props) => {
  return (
    <div>
      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright &copy; {Props.email}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
