/* eslint-disable @typescript-eslint/ban-types */
import React, { useRef, useCallback } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Link, useHistory } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';

import { Container, Content, Lateral, DiasDaSemana } from './styles';

import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErros';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

import PageHeader from '../../components/PageHeader'
import SideBarPortal from '../../components/SideBarPortal'


interface SignInFormData {
    email: string;
    password: string;
}

const Solicitacao: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const { signIn } = useAuth();
    const { addToast } = useToast();
    const history = useHistory();

    const handleSubmit = useCallback(
        async (data: SignInFormData) => {
            try {
                formRef.current?.setErrors({});

                const schema = Yup.object().shape({
                    celular: Yup.string().required('Celular obrigatório'),
                    associado: Yup.string().required('Selecione um Associado'),
                    tipo_solicitacao: Yup.string().required('Selecione um tipo'),
                    preferencia_horarios: Yup.string().required('Selecione uma preferência de horarios'),
                    especialidade: Yup.string().required('Selecione uma especialidade'),
                    outra_especialidade: Yup.string().required('Celular obrigatório'),
                });

                await schema.validate(data, {
                    abortEarly: false,
                });

                await signIn({ email: data.email, password: data.password });

                history.push('/dashboard');

                addToast({
                    type: 'success',
                    title: 'Autenticado com sucesso!',
                });
            } catch (err) {
                if (err instanceof Yup.ValidationError) {
                    const errors = getValidationErrors(err);
                    formRef.current?.setErrors(errors);
                    return;
                }

                addToast({
                    type: 'error',
                    title: 'Erro na autenticação',
                    description: 'Ocorreu um erro ao fazer login, cheque as credenciais.',
                });
            }
        },
        [signIn, addToast, history],
    );

    return (

        <>
            <PageHeader />
            <div className="block_container">
                <Container>
                    <Lateral>
                        <SideBarPortal />
                    </Lateral>

                    <Content>
                        <Form ref={formRef} onSubmit={handleSubmit}>
                            <h2>Nova Solicitação</h2>
                            <p>Por favor complete todos os dados abaixo:</p>
                            <Select name="associado" placeholder="Associado">
                                <option hidden value="">Associado</option>
                                <option value="DGF">Danilo Gujansky Facco</option>
                                <option value="FRD">Fred Colnago</option>
                                <option value="audi">Pedro Missawa</option>
                                <option value="audi">Erika Bortolini</option>
                            </Select>

                            <Input name="celular" type="number" placeholder="Celular" />

                            <Select name="tipo_solicitacao" placeholder="Tipo de Solicitação">
                                <option hidden value="">Tipo de solicitação</option>
                                <option value="DGF">Consulta</option>
                                <option value="FRD">Exame</option>
                                <option value="audi">Cirurgia Eletiva</option>
                                <option value="audi">Documentos Diversos</option>
                            </Select>

                            <Select name="especialidade" placeholder="Especialidade">
                                <option hidden value="">Epecialidade</option>
                                <option value="consultas">Consulta</option>
                                <option value="exame">Exame</option>
                                <option value="cirurgia">Cirurgia Eletiva</option>
                                <option value="diversos">Documentos Diversos</option>
                            </Select>

                            <Input name="outra_especialidade"   placeholder="Digite outra especialidade" />

                            <Select name="preferencia_horarios" placeholder="Preferencia de Horários">
                                <option hidden value="" >Preferencia de horários</option>
                                <option value="sp">Sem preferência</option>
                                <option value="manha">Manhã</option>
                                <option value="tarde">Tarde</option>
                            </Select>
                            <p className="alert">Esta opção é apenas uma referência</p>

                            <strong>Dias da semana:</strong>
                            <DiasDaSemana>
                                <Button className="diadasemana" type="button">Sem Preferencia</Button>
                                <Button className="diadasemana" type="button">Segunda</Button>
                                <Button className="diadasemana" type="button">Terça</Button>
                                <Button className="diadasemana" type="button">Quarta</Button>
                                <Button className="diadasemana" type="button">Quinta</Button>
                                <Button className="diadasemana" type="button">Sexta</Button>
                            </DiasDaSemana>
                            <Button type="submit">Solicitar</Button>
                        </Form>
                    </Content>
                </Container>
            </div>





        </>



    );
};

export default Solicitacao;


