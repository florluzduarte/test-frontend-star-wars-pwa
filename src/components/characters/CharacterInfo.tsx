import { useCallback, useEffect, useState } from "react";
import { Heading2, UnorderedList } from "../"
import { extractIdFromUrl } from "../../utils/extractIdFromUrl";

interface CharacterInfoProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  contextItems: any;
  urlItems: string[];
  title: string;
}

interface ContextItem {
  url: string;
  name: string;
}

export const CharacterInfo = ({ title, urlItems, contextItems }: CharacterInfoProps) => {

  const [itemsNames, setItemsNames] = useState<string[]>([]);

  const getItemsNames = useCallback((): string[] => {
    if (!contextItems || contextItems.length === 0) return [];
    if (urlItems.length === 0) return [];

    return urlItems.map((itemUrl: string) => {
      const itemId = extractIdFromUrl(itemUrl);
      const foundItem = contextItems.find((contextItem: ContextItem) => extractIdFromUrl(contextItem.url) === itemId);
      return foundItem?.name || "Unknown";
    });
  }, [contextItems, urlItems]);

  useEffect(() => {
    setItemsNames(getItemsNames());
  }, [getItemsNames]);

  return (
    <>
      <Heading2>{title}</Heading2>
      <UnorderedList items={itemsNames}></UnorderedList>
    </>
  );
};