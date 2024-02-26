import React, {useState, useMemo} from "react";
import { Stack, Image, Text, Button } from "@chakra-ui/react";
import BagIcon from "../icons/BagIcon";

export default function ProductCard({ product, onAdd }) {
  const [isHovered, setIsHovered] = useState(false);
  const productImage = useMemo(() => {
   
    return isHovered ? product.image2 : product.image;
  }, [isHovered, product.image, product.image2]);


  
  return (
    <Stack
      key={product.id}
      borderRadius="md"
      spacing={3}
      borderWidth={1}
      borderColor="gray.100"
      justifyContent="center"
      alignItems="center"
      width="100%"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Stack direction="column" padding={2} spacing={4} width="100%">
        <Stack position="relative">
          <Image
            backgroundColor="white"
            borderRadius="md"
            loading="lazy"
            minWidth={{ base: 24, sm: 36 }}
            objectFit="contain"
            src={productImage}
            width="100%"
          />
          <Button
            size="sm"
            position="absolute"
            bottom="20px"
            left="50%"
            transform="translateX(-50%)"
            onClick={onAdd}
            bgColor="#CE6857"
            _hover={{ bgColor: "#953b2c" }}
          >
            <Image src="https://icongr.am/feather/shopping-bag.svg?size=18&color=ffffff" />
          </Button>
        </Stack>

        <Stack
          spacing={1}
          width="100%"
          justifyContent="space-between"
          textAlign="center"
        >
          <Stack spacing={1}>
            <Text fontWeight="500">{product.title}</Text>
            <Text fontSize="sm" color="gray.500">
              {product.description}
            </Text>
            <Text color="#CE6857" fontSize="sm" fontWeight="500">
              ${product.price}
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
