import { Heading2, UnorderedList } from "../"

interface CharacterInfoProps {
  items: string[];
  title: string;
}

export const CharacterInfo = ({ title, items }: CharacterInfoProps) => {
  return (
    <>
      <Heading2>{title}</Heading2>
      <UnorderedList items={items} />
    </>
  )
};