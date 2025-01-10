import { Section } from "./styles";
export interface ICard {
  produto: string
  comentario: string
}
export const Card = ({produto, comentario}: ICard) => {
  return (
    <Section>
      <aside>
        <h5>Produto:</h5>
        <p>{produto}</p>
      </aside>
      <aside>
        <h5>Comentário:</h5>
        <p>{comentario}</p>
      </aside>
    </Section>
  );
};
