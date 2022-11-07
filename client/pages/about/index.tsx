import { Container, Text } from "@nextui-org/react";
import PageLayout from "../../components/layouts/PageLayout";
import Title from "../../components/Title";

export default function About() {
    return (
        <PageLayout title="About">
            <Container xl>
                <Text size={"md"}> 
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, cupiditate. Earum commodi fugiat deleniti voluptate dolorem! Ab sapiente a quisquam earum facere, neque in provident architecto sequi, optio, inventore ullam?
                </Text>
            </Container>
        </PageLayout>
    )
}