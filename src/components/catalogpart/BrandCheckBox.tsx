import { Checkbox, FormControlLabel } from "@mui/material";
import { useEffect, useState } from "react";
import prods from "../../data/products.json";
import React from 'react';

export const BrandCheckBox = ({
  onCheckBrand,
  checkedItems,
  setCheckedItems,
  brand,
}: {
  onCheckBrand: (checkedItems: string[]) => void;
  checkedItems: string[];
  setCheckedItems: (val: string[]) => void;
  brand: string[];
}) => {

  useEffect(() => {
    onCheckBrand(checkedItems);
  }, [checkedItems]);

  return (
    <>
      {brand.map((product) => {
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
