import { Checkbox, FormControlLabel } from "@mui/material";
import { useEffect, useState } from "react";
import prods from "../../data/products.json";

export const ManufacturerCheckBox = ({
  onCheck,
  checkedItems,
  setCheckedItems,
  manufacturer,
}: {
  onCheck: (checkedItems: string[]) => void;
  checkedItems: string[];
  setCheckedItems: (val: string[]) => void;
  manufacturer: string[];
}) => { 

  useEffect(() => {
    onCheck(checkedItems);
  }, [checkedItems]);

  return (
    <>
      {manufacturer.map((product) => {
        return (
          <FormControlLabel
            control={
              <Checkbox
                checked={checkedItems.includes(product)}
                onChange={() => {
                  checkedItems.includes(product)
                    ? setCheckedItems(
                        checkedItems.filter((el) => el !== product)
                      )
                    : setCheckedItems([...checkedItems, product]);
                }}
              />
            }
            label={product}
            labelPlacement="end"
            componentsProps={{ typography: { variant: "body2" } }}
          />
        );
      })}
    </>
  );
};
