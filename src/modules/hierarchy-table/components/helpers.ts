import { IPersonDto } from "@/services/types";

const hasParent = (
  parentArray: IPersonDto[],
  childItem: IPersonDto
): IPersonDto | undefined =>
  parentArray.find((item) => item.id === childItem.parentId);

export const transformServerDataToTable = (
  serverData: IPersonDto[]
): IPersonDto[] => {
  const transformedData: IPersonDto[] = [];
  serverData.map((serverItem, _, originalArray) => {
    if (serverItem.parentId) {
      const parent = hasParent(originalArray, serverItem);
      if (!parent) return;
      parent.children
        ? parent.children.push(serverItem)
        : (parent.children = [serverItem]);
    } else {
      transformedData.push(serverItem);
    }
  });
  return transformedData;
};
