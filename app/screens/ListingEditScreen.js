import React from "react";
import * as Yup from "yup";

import listingsApi from "../api/listings";
import { CategoryPickerItem } from "../components";
import {
  Form,
  FormField,
  FormImagePicker,
  FormPicker,
  SubmitButton,
} from "../components/forms";
import { View } from "../components/styles";
import categories from "../data/categories";
import useLocation from "../hooks/useLocation";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object()
    .shape({ label: Yup.string(), value: Yup.number() })
    .required()
    .nullable()
    .label("Category"),
  images: Yup.array().min(1, "Please select at least on image."),
});

const ListingEditScreen = ({ route }) => {
  const data = route?.params?.data;
  const inititalImages = data ? data : [];
  const location = useLocation();

  const handleSubmit = async (listing) => {
    const result = await listingsApi.addListing({ ...listing, location });
    if (!result.ok) return alert("Could not save the listing");

    alert("Success");
  };

  return (
    <View container>
      <Form
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: inititalImages,
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" data={data} />
        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <FormPicker
          items={categories}
          name="category"
          numberOfColumns={3}
          placeholder="Category"
          PickerItemComponent={CategoryPickerItem}
          width="50%"
        />
        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLine={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </Form>
    </View>
  );
};

export default ListingEditScreen;
