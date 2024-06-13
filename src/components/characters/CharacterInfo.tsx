import { useCallback, useEffect, useState } from "react";
import { Heading2, UnorderedList } from "../"
import { Species, Starships, Vehicles } from "../../models";

interface CharacterInfoProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  contextItems: any;
  urlItems: string[];
  title: string;
}

export const CharacterInfo = ({ title, urlItems, contextItems }: CharacterInfoProps) => {

  const [itemsNames, setItemsNames] = useState<string[]>([]);

  const getItemsNames = useCallback((itemsFromContext): string[] => {
    if (!itemsFromContext || itemsFromContext.length < 1) return [];
    if (urlItems.length < 1) return [];
    return urlItems?.map((item: string) => {
      console.log("TITLE:", title);
      const findedItems = itemsFromContext?.find((itemContext: Starships | Vehicles | Species) => itemContext?.url == item)?.name;
      console.log({ findedItems });
      return findedItems;
    })
  }, [title, urlItems]);

  useEffect(() => {
    if (contextItems) {
      const itemsFromContext = contextItems[title.toLowerCase()];
      setItemsNames(getItemsNames(itemsFromContext));
    }
  }, [contextItems, getItemsNames, title]);

  //hay qeu pasarle en items = Nave.name[]
  return (
    <>
      <Heading2>{title}</Heading2>
      {
        itemsNames && itemsNames.map((name) => (
          <p key={name + 1}>{name}</p>
        ))
      }
    </>
  )
};