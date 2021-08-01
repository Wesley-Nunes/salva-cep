import "../../styles/global.css";

const CardFull = (props) => {
  const { cep, logradouro, bairro, cidade, estado } = props.fields[0];

  return (
    <table className="borderWrapper mediumFontSize mediumMargin">
      <tr>
        <th className="littlePadding">CEP: </th>
        <td>{cep}</td>
      </tr>
      <tr>
        <th className="littlePadding">Logradouro: </th>
        <td>{logradouro}</td>
      </tr>
      <tr>
        <th className="littlePadding">Bairro: </th>
        <td>{bairro}</td>
      </tr>

      <tr>
        <th className="littlePadding">Cidade: </th>
        <td>{cidade}</td>
      </tr>
      <tr>
        <th className="littlePadding">Estado: </th>
        <td>{estado}</td>
      </tr>
    </table>
  );
};

export default CardFull;
