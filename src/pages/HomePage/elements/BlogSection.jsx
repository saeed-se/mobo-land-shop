import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import BlogSlider from "@/pages/HomePage/elements/BlogSlider";
import useBlogs from "@/Hooks/useBlogs";

const BlogSection = () => {
  const { blogs, loading, error } = useBlogs();
  return (
    <Container>
      <SectionTitle title={"وبلاگ"} btnText={"نمایش بیشتر در بلاگ"} />
      <BlogSlider blogs={blogs} />
    </Container>
  );
};

export default BlogSection;
