import { render, screen } from '@testing-library/react';
import Post from '../'

describe('Teste para o componente Post', () => {
    test('Deve renderizar o componente corretamente', () => {
        const { debug } = render(
            <Post imageUrl="https://via.placeholder.com/200x200">
                Teste
            </Post>
        );
        debug();
        expect(screen.getByText('Teste')).toBeInTheDocument();
    });
})

