import React from "react";
import { Stack, Image, Text, Button } from "@chakra-ui/react";

const parseCurrency = (value) => {
  return value.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
  });
};

const ProductCard = ({ product, onAdd }) => {
  return (
    <Stack
      key={product.id}
      borderRadius="md"
      spacing={3}
      borderWidth={1}
      borderColor="gray.100"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Stack
        direction="column"
        padding={2}
        spacing={4}
        width="100%"
        alignItems="center"
      >
        <Image
          backgroundColor="white"
          borderRadius="md"
          loading="lazy"
          objectFit="contain"
          src={product.image}
          width="100%"
        />
        <Stack spacing={1} width="100%" justifyContent="space-between">
          <Stack spacing={1}>
            <Text fontWeight="500">{product.title}</Text>
            <Text fontSize="md" color="gray.500">
              {product.description}
            </Text>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="baseline"
          >
            <Text color="#CE6857" fontSize="md" fontWeight="500">
              {parseCurrency(product.price)}
            </Text>
            <Button size="xs" onClick={onAdd}>
              Agregar
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProductCard;
