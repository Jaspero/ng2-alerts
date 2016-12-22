export class TestNeste {
    @JasperoBuilder.dec({initial: true})
    male: boolean
}

export class Test {
    @JasperoBuilder.dec({initial: ''})
    firstName: string;

    @JasperoBuilder.dec()
    lastName: TestNeste;
}