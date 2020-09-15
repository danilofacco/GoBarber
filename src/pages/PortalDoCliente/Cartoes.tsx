/* eslint-disable @typescript-eslint/ban-types */
import React, { useRef, useCallback } from 'react';
import { FiChevronLeft, FiChevronRight,FiPrinter,FiDownload } from 'react-icons/fi';

import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Link, useHistory } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';

import { Container, Content, Lateral, CartoesContainer, DuasColunas } from './styles';

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

const Cartoes: React.FC = () => {
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
                    <h1>Cartões</h1>
                        <CartoesContainer>
                            <FiChevronLeft size={50} />
                            <img src="https://intermedicina.com.br/api/cartao/cartao_digital.php?nc=ZkhnV3pVL2hnZkhFTWxsVlFYNVgwbkppTVlFN3BSanN2dnFZOUFRUDFybz0=&nome=SU9TcWl0UjBTU0xZZGpwVWUzb1E3NEJvTUh5YzJwWE56RkM0emwwbGY5Zz0=&dtn=ZDlpdno0dU9sbWJ2RFV6Zk1NMEJOUT09&dti=SU9LQm0vSE1USm1XMEMwaWdwUkdDdz09&dtv=SkdvbktvMWt0T0RQc1R2aXQxTkowUT09&p=SUtqYlliZ3hVSzhpWEhOb25nK1hnSGRNL3VacjFiMnNMYVVTSDdzeUx5QT0=" alt="Danilo Gujansky Facco" />
                            <FiChevronRight size={50} />
                        </CartoesContainer>
                       
                        <DuasColunas>
                            <Button type="button"><FiDownload size={20}/> Fazer Download</Button>
                            <Button type="button"><FiPrinter size={20}/> Imprimir Cartão</Button>
                        </DuasColunas>


                    </Content>
                </Container>
            </div>





        </>



    );
};

export default Cartoes;


