type Props = {
  isTitle: boolean;
};

const TextInformation = ({ isTitle }: Props) => {
  return (
    <>
      <p className="instalattion-section-sub-title">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eos
        veritatis libero, assumenda doloremque voluptate facilis nostrum
        explicabo sequi, similique quod eum molestiae, quam dolore consequuntur
        reprehenderit porro. Alias, ratione!
      </p>
      {isTitle && <h2 className="instalattion-section-title">Lorem Ipsum</h2>}
    </>
  );
};

export default TextInformation;
